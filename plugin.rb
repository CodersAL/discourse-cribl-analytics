enabled_site_setting :cribl_analytics_enabled
register_asset 'stylesheets/sass/cribl-analytics.scss'

if respond_to?(:register_svg_icon)
  register_svg_icon "long-arrow-alt-up"
  register_svg_icon "long-arrow-alt-down"
end

after_initialize do

end
