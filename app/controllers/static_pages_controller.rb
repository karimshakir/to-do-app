class StaticPagesController < ApplicationController
  def index
    render layout: nil
  end
end
