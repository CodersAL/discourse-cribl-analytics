# frozen_string_literal: true

Discourse::Application.routes.append do
  mount ::CriblAnalytics::Engine, at: 'cribl'
end

::CriblAnalytics::Engine.routes.draw do
  get '/analytics' => 'analytics#index'
  get '/analytics/:user_id' => 'analytics#index'
  get '/analytics/all_time' => 'analytics#all_time'
  get '/analytics/today' => 'analytics#today'
end
