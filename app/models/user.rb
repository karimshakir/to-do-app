# == Schema Information
#
# Table name: users
#
#  id                     :bigint(8)        not null, primary key
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0)
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#  username               :string(255)
#  remember_token         :string(255)
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

class User < ApplicationRecord
  devise :rememberable,
         :database_authenticatable,
         :trackable,
         authentication_keys: [:username]

  before_create :rememberable_value

  def rememberable_value
    self.remember_token ||= Devise.friendly_token
  end
end
