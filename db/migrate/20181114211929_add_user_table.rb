class AddUserTable < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :encrypted_password, limit: 255, default: "", null: false
      t.string :reset_password_token, limit: 255
      t.datetime :reset_password_sent_at
      t.datetime :remember_created_at
      t.integer :sign_in_count, default: 0
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string :current_sign_in_ip, limit: 255
      t.string :last_sign_in_ip, limit: 255
      t.string :username, limit: 255
      t.string :remember_token, limit: 255
      t.timestamps
    end
  end
end
