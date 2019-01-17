class AddsToDoItem < ActiveRecord::Migration[5.2]
  def change
    create_table :to_do_items do |t|
      t.string :title
      t.string :description
      t.integer :priority
      t.boolean :complete_flag, default: false
      t.timestamps
    end
  end
end
