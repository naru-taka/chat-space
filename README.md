# README

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
# groupsテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|message_id|text|null: false,forien_key: true|

###Association
- has_many :messages
- has_many :users, through: :users_groups

# membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

# usersテーブル

|Column|Type|Option|
|------|----|------|
|comment_id|text|null: felse, foreign_key: true|
|image_id|string|null: felse, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

###Assosiation
- has_many :members
- has_many :messages
- has_many :groups, through: :users_groups

# messageテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: felse, foreign_key: true|
|group_id|integer|null: felse, foreign_key: true|

###Assosiation
-belong_to :group
-belong_to :user

# users_groupsテーブル

|Column|Type|Option|
|------|----|------|
|user_id|integer|null: felse, foreign_key: true|
|group_id|integer|null: felse, foreign_key: true|

###Assosiation
-has_many :users, through: :users_groups
-has_many :groups, through: :users_groups

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
