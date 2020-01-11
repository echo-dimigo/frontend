import { toDate } from 'unix-timestamp'

export const Ingang = ingang => ({
  idx: ingang['idx'],
  day: ingang['day'],
  title: ingang['title'],
  time: ingang['time'],
  startDate: toDate(ingang['request_start_date']),
  endDate: toDate(ingang['request_end_date']),
  status: ingang['status'],
  present: ingang['present'],
  maxUser: ingang['max_user']
})

export const Afterschool = afsc => ({
  idx: afsc['idx'],
  name: afsc['name'],
  startDate: afsc['request_start_date'],
  endDate: afsc['request_end_date'],
  day: afsc['day'],
  time: afsc['time'],
  targetGrade: afsc['target_grade'],
  maxCount: afsc['max_of_count'],
  requestCount: afsc['all_request_count'],
  status: afsc['status'],
  teacher: afsc['teacher_name']
})
