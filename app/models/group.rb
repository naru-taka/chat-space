class Group < ApplicationRecord
  has_many :group_users
  has_many :users, through: :group_users
  validation :name, presence: true, uniquenss: true
end
