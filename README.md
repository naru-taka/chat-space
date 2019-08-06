# groupsテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false, unique: true|

###Association
- has_many :messages
- has_many :users, through: :users_groups
- has_many :group_users

# usersテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: felse, unique: true, index: true|

###Assosiation
- has_many :messages
- has_many :groups, through: :users_groups
- has_many :group_users

# messageテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: felse, foreign_key: true|
|group_id|integer|null: felse, foreign_key: true|
|image|string|
|body|text|

###Assosiation
- belong_to :group
- belong_to :user

# group_usersテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: felse, foreign_key: true|
|group_id|integer|null: felse, foreign_key: true|

###Assosiation
- belong_to :user
- belong_to :group

