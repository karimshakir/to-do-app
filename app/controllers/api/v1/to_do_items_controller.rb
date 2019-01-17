module Api
  module V1
    class ToDoItemsController < ApiController

      # GET /to_do_items
      # GET /to_do_items.json
      def index
        @to_do_items = ToDoItem.all
      end

      # GET /to_do_items/1
      # GET /to_do_items/1.json
      def show
        @to_do_item = ToDoItem.find(params[:id])
      end

      # POST /to_do_items
      # POST /to_do_items.json
      def create
        to_do_item = ToDoItem.create!(to_do_item_params)
        respond_to do |format|
          format.json { render json: { status: 'ok' } }
        end
      end

      private

      def to_do_item_params
        params.require(:to_do_item).permit(:title, :description, :priority)
      end
    end
  end
end
