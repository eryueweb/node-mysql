## 初识node服务端开发，express+mysql实现简单的增删改查功能。
## 一些常用的mysql语句
1. ### 查询
* #### 随机查询
   `SELECT * FROM [tableName] ORDER BY RAND() LIMIT [Number]`
* #### 多表查询
   `SELECT * FROM [tableName] UNION ALL SELECT * FROM [tableName]`
* #### 升降序查询
   `SELECT * FROM [tableName] ORDER BY [field] DESC|ASC`
* #### 条件查询
   `SELECT * FROM [tableName] WHERE [field]=[value]`
* #### 分页查询
   `SELECT * FROM [tableName] LIMIT [page*pageSize],[pageSize]`
2. ### 更新
* #### 多字段更新
   `UPDATE [tableName] SET [field]=[value],[field]=[value] WHERE [field]=[value]`
* #### 默认值更新
   `ALTER TABLE [tableName] ALTER COLUMN [field] SET DEFAULT [value]`   
   例：`ALTER TABLE table_article ALTER COLUMN creatTime SET DEFAULT 'CURRENT_TIMESTAMP'`
3. ### 新增
* #### 数据
   `INSERT INTO [tableName] (field1,field2) VALUES (value1,value2)`
* #### 字段
   例：`ALTER TABLE table_article author VARCHAR(10) DEFAULT 'xiaoming'`
4. ### 删除
   `DELETE FROM [tableName] WHERE [field]=[value]`
