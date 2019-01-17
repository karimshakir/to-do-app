require 'rails_helper'

describe Api::V1::ToDoItemsController, :type => :controller do

  before :each do
    sign_in users(:user1)
  end

  describe "GET index" do
    it "assigns all to do items" do
      item = create :to_do_item
      get :index, as: :json
      expect(assigns(:to_do_items)).to eq([item])
    end
  end

  describe "GET show" do
    it "assigns the to do item" do
      item = create :to_do_item
      get :show, as: :json, params: { id: item.id }
      expect(assigns(:to_do_item)).to eq(item)
    end
  end

  describe "POST create" do
    it 'creates the to do item' do
      new_to_do_item = {
        title: 'A to do item title',
        description: 'A to do item description',
        priority: '4',
      }
      post :create, as: :json, params: { to_do_item: new_to_do_item }
      expect(ToDoItem.where(new_to_do_item).count).to eq(1)
    end

    it 'returns the right response' do
      new_to_do_item = {
        title: 'A to do item title',
        description: 'A to do item description',
        priority: '4',
      }
      post :create, as: :json, params: { to_do_item: new_to_do_item }
      expect(JSON.parse(response.body)).to eq({'status' => 'ok'})
    end
  end
end
