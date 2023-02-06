module Jekyll
  module InfoSessionStatus
    def future_info_sessions(post)
      today = Date.today
      sessions = []

      if !post["info sessions"]
        return sessions
      end

      for session in post["info sessions"]
        if session["date"] >= today
          sessions.push(session)
        end
      end

      return sessions.sort_by! { |session| session["date"] }
    end
  end
end

Liquid::Template.register_filter(Jekyll::InfoSessionStatus)