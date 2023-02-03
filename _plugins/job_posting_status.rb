module Jekyll
  module PostingStatus
    def job_posting_status(post)
      today = Date.today
      opens = post['opens']
      closes = post['closes']

      if !opens.kind_of? Date or !closes.kind_of? Date
        return "upcoming"
      end

      if opens <= today && closes >= today
        return "open"
      elsif closes < today
        return "closed"
      end
      return "upcoming"
    end

    def open_positions(positions)
      return positions.select { |job| job_posting_status(job) == "open" }
    end

    def upcoming_positions(positions)
      return positions.select { |job| job_posting_status(job) == "upcoming" }
    end
  end
end

Liquid::Template.register_filter(Jekyll::PostingStatus)
