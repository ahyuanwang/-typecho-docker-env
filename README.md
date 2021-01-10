# typecho-docker-env

## 关于

docker为高可定制化的工具，查找其他人的文章，构建自己的使用的环境。

## 获取

``` shell
git clone https://github.com/ahyuanwang/typecho-docker-env.git
```

## 进入并修改web目录权限

``` shell
cd typecho-docker-env
chown -R 33:33 web
```

## 修改.env环境变量

默认数据：

```
TimeZone=Asia/Shanghai
MYSQL_DATABASE=typecho
MYSQL_ROOT_PASSWORD=4AyRh7&CMtHBb9ECc5
MYSQL_USER=typecho
MYSQL_PASSWORD=RW5zCvhKG4cF69q6dw
```

## 修改redis配置

typecho-docker-env/redis/conf/redis.conf

```
requirepass yourpassword
```

如需测试redis，需修改typecho-docker-env/web/redis.php数据库密码、redis端口、redis密码

==否则请删除redis.php==

## 替换typecho版本

如需替换版本，请自行下载版本安装，使用的为开发版：https://github.com/typecho/typecho/actions/runs/450618383

web目录下，删除原版本：

```
rm -rf admin index.php install install.php LICENSE.txt usr var
```

自行下载解压新版本。

## 构建并运行

```
docker-compose build
docker-compose up -d
```

## php.ini

custom/php.ini,启用了缓冲，在构建时移入docker内，未做映射。

该选项设置为 On 时，将在所有的脚本中使用输出控制。如果要限制输出缓冲区的最大值，可将该选项设定为指定的最大字节数（例如 output_buffering=4096）

```
output_buffering =on
```

