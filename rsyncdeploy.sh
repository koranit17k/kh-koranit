#!/bin/bash
# สร้างไฟล์และcopy ไฟล์ ไปใน/var/www/dist เพื่อใช้ deploy localhost
sudo rsync -av --delete dist/ /var/www/dist/ 
