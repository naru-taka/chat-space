# groupsテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: false, unique: true|

###Association
- has_many :messages
- has_many :users, through: :users_groups
- has_many :users_groups

# usersテーブル

|Column|Type|Option|
|------|----|------|
|name|string|null: felse, unique: true|

###Assosiation
- has_many :messages
- has_many :groups, through: :users_groups

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

# users_groupsテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: felse, foreign_key: true|
|group_id|integer|null: felse, foreign_key: true|

###Assosiation
- belong_to :user
- belong_to :group

