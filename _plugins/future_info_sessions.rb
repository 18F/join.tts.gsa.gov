module Jekyll
  module InfoSessionStatus
    def future_info_sessions(position)
      today = Date.today
      sessions = []

      if !position["info sessions"]
        return sessions
      end

      for session in position["info sessions"]
        if session["date"] and session["date"] >= today
          sessions.push(session)
        end
      end

      return sessions.sort_by! { |session| session["date"] }
    end
  end
end

Liquid::Template.register_filter(Jekyll::InfoSessionStatus)