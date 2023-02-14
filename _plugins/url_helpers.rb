module Jekyll
  module UrlHelpers
    def string_is_link(str)
      if str.kind_of? String
        m = /^https?:\/\//.match(str)
        if m
          return true
        end
      end
      return false
    end
  end
end

Liquid::Template.register_filter(Jekyll::UrlHelpers)