module Jekyll
  module InfoSessionStatus
    def future_info_sessions(info_sessions)
      today = Date.today
      sessions = []

      if !info_sessions
        return sessions
      end

      for session in info_sessions
        if session["date"] and session["date"] >= today
          sessions.push(session)
        end
      end

      return sessions.sort_by! { |session| session["date"] }
    end

    def future_info_sessions_for_job(position)
      if !position["info sessions"]
        return []
      end

      return future_info_sessions(position["info sessions"])
    end
  end
end

Liquid::Template.register_filter(Jekyll::InfoSessionStatus)