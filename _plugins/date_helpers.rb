module Jekyll
  module DateHelpers
    def human_friendly(date)
      if date.kind_of? Date
        day = date.mday

        postfix = "th"
        if day / 10 != 1
          if day % 10 == 1
            postfix = "st"
          elsif day % 10 == 2
            postfix = "nd"
          elsif day %10 == 3
            postfix = "rd"
          end
        end

        return date.strftime("%A, %B %e" + postfix + ", %Y")
      end
      return ""
    end
  end
end

Liquid::Template.register_filter(Jekyll::DateHelpers)