FactoryBot.define do
  factory :user do
    username { 'steve' }
    encrypted_password { Devise::Encryptor.digest(User, 'asdfasdf') }
  end

  factory :to_do_item do
    title { 'Buy Milk' }
    description { 'I need to get milk for cereal' }
    priority { 1 }
    complete_flag { false }
  end
end
