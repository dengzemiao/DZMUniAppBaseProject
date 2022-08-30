# 开始
echo "\033[1;42m============================== 开始合并 ==============================\033[0m"

# 当前分支
cb=$(git branch | sed -n '/\* /s///p')
# 目标分支(cb 将被合并到 tb 分支)
tb="dev"
# 错误码
code=1
# 是否开启log (1：开启，0：不开启)
isLog=1
# 描述
msg="$1"
if [[ -z $msg ]];then
  msg="$(date '+%Y-%m-%d %H:%M:%S') 提交优化"
fi
# 分支列表
bs=$(git branch -a)
# Git
# 是否有本地保存代码
isStash=0
# 是否有必须要提交的代码（解决了冲突需要提交代码）
isNeeds=0
# 是否有当前远程分支
isRemote=0
if [[ "$bs" =~ "origin/$cb" ]]; then
  isRemote=1
fi
if [[ $isRemote -eq 1 ]];then
  # 暂存代码
  stashmsg=$(git stash)
  if [[ "$stashmsg" =~ "保存工作目录和索引状态" || "$stashmsg" =~ "Saved working directory and index state" ]]; then
    isStash=1
  fi
  if [[ "$stashmsg" =~ "needs merge" ]]; then
    isNeeds=1
  fi
  # 有暂存代码
  if [[ $isStash -eq 1 && $isNeeds -eq 0 ]]; then
    if [ $isLog -eq 1 ];then
      echo "\033[1;32m------------------------------ git stash \033[0m"
    fi
    echo "$stashmsg"
    # 拉取当前分支
    if [ $isLog -eq 1 ];then
      echo "\033[1;32m------------------------------ git pull origin "$cb" \033[0m"
    fi
    git pull origin "$cb"
    if [ $? -ne 0 ];then
      echo "\033[1;41m============================== 拉取远程分支 $cb 错误 \033[0m"
      exit $code
    fi
    # 提取合并暂存的开发内容
    if [ $isLog -eq 1 ];then
      echo "\033[1;32m------------------------------ git stash pop \033[0m"
    fi
    git stash pop
    if [ $? -ne 0 ];then
      echo "\033[1;41m============================== 本地与远程分支 $cb 合并错误 \033[0m"
      exit $code
    fi
  fi
fi
if [ $isLog -eq 1 ];then
  echo "\033[1;32m------------------------------ git add . \033[0m"
fi
git add .
if [ $isLog -eq 1 ];then
  echo "\033[1;32m------------------------------ git commit -m "$msg" \033[0m"
fi
git commit -m "$msg"
# 拉取当前分支
if [[ $isRemote -eq 1 && $isStash -eq 0 && $isNeeds -eq 0 ]];then
  if [ $isLog -eq 1 ];then
    echo "\033[1;32m------------------------------ git pull origin "$cb" \033[0m"
  fi
  git pull origin "$cb"
  if [ $? -ne 0 ];then
    echo "\033[1;41m============================== 拉取远程分支 $cb 错误 \033[0m"
    exit $code
  fi
fi
# 提交当前分支
if [ $isLog -eq 1 ];then
  echo "\033[1;32m------------------------------ git push origin "$cb" \033[0m"
fi
git push origin "$cb"
if [ $? -ne 0 ];then
  echo "\033[1;41m============================== 提交远程分支 $cb 错误 \033[0m"
  exit $code
fi
# 当前分支 != 目标分支
if [[ $cb != $tb ]];then
  # 切换到目标分支
  if [ $isLog -eq 1 ];then
    echo "\033[1;32m------------------------------ git checkout "$tb" \033[0m"
  fi
  git checkout "$tb"
  if [ $? -ne 0 ];then
    echo "\033[1;41m============================== 切换到分支 $tb 错误 \033[0m"
    exit $code
  fi
  # 拉取目标分支
  if [[ "$bs" =~ "origin/$tb" ]];then
    if [ $isLog -eq 1 ];then
      echo "\033[1;32m------------------------------ git pull origin "$tb" \033[0m"
    fi
    git pull origin "$tb"
    if [ $? -ne 0 ];then
      echo "\033[1;41m============================== 拉取远程分支 $tb 错误 \033[0m"
      exit $code
    fi
  fi
  # 将当前分支合并到目标分支
  if [ $isLog -eq 1 ];then
    echo "\033[1;32m------------------------------ git merge "$cb" \033[0m"
  fi
  git merge "$cb"
  if [ $? -ne 0 ];then
    echo "\033[1;41m============================== $tb 合并分支 $cb 错误 \033[0m"
    exit $code
  fi
  # 提交目标分支
  if [ $isLog -eq 1 ];then
    echo "\033[1;32m------------------------------ git push origin "$tb" \033[0m"
  fi
  git push origin "$tb"
  if [ $? -ne 0 ];then
    echo "\033[1;41m============================== 提交远程分支 $tb 错误 \033[0m"
    exit $code
  fi
  # 切回当前分支
  if [ $isLog -eq 1 ];then
    echo "\033[1;32m------------------------------ git checkout "$cb" \033[0m"
  fi
  git checkout "$cb"
fi

# 结束
echo "\033[1;42m============================== 合并成功 ==============================\033[0m"