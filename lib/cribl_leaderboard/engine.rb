# frozen_string_literal: true

module ::CriblAnalytics
  class Engine < ::Rails::Engine
    engine_name "cribl_analytics"
    isolate_namespace CriblAnalytics
  end
end
