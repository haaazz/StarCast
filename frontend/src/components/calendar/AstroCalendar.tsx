import { useEffect, useState } from 'react'
// import { useAstroEventList } from "@apis/endpoints/calendar/hooks/useAstroEventList";
import { AstroEventsDummy } from '@dummy/astroEventsDummy'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './AstroCalendar.css'
import { StarIconCal } from '@assets/svg'

import AstroEventDetail from './AstroEventDetail'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const AstroCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [monthlyTip, setMonthlyTip] = useState<any | null>(null);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [formattedDate, setFormattedDate] = useState<string | null>(null);
  
  const handleClick = (value: Date) => {
    setIsDateSelected(true);

    const localeString = value.toLocaleDateString('ko-KR');
    const parts = localeString.split('.').map(part => part.trim());
    const year = parts[0];
    const month = parts[1].padStart(2, '0'); 
    const day = parts[2].padStart(2, '0');   
    const formattedDate = `${year}${month}${day}`;

    setFormattedDate(formattedDate)

    const currentMonth = formattedDate.slice(0, 6)
    const events = AstroEventsDummy[currentMonth] || []
    const eventForDate = events.filter((event) => event.locdate === formattedDate)

    setSelectedEvent(eventForDate.length > 0 ? eventForDate : null)
  }

  const handleMonthChange = ({ activeStartDate }: { activeStartDate: Date | null }) => {
    if (!activeStartDate) return;

    setIsDateSelected(false);

    const year = activeStartDate.getFullYear()
    const month = (activeStartDate.getMonth() + 1).toString().padStart(2, '0')
    const formattedMonth = `${year}${month}`

    const events = AstroEventsDummy[formattedMonth] || []
    const monthTip = events.find((event) => event.locdate === formattedMonth)

    setMonthlyTip(monthTip || null)
  }

  const tileClassName = ({ date }: { date: Date }) => {
    const today = new Date()
    const in7Days = new Date()
    in7Days.setDate(today.getDate() + 6)

    today.setHours(0, 0, 0, 0)
    in7Days.setHours(0, 0, 0, 0)

    if (date.getTime() === today.getTime()) {
      return 'highlight-start'
    } else if (date.getTime() === in7Days.getTime()) {
      return 'highlight-end'
    } else if (date > today && date < in7Days) {
      return 'highlight'
    }
    return ''
  }

  const tileContent = ({ date }: { date: Date }) => {
    const kstOffset = 9 * 60
    const formattedDate = new Date(date.getTime() + kstOffset * 60 * 1000)
    formattedDate.setUTCHours(0, 0, 0, 0)

    const formattedString = formattedDate.toISOString().split('T')[0].replace(/-/g, '')
    const currentMonth = formattedString.slice(0, 6)
    const events = AstroEventsDummy[currentMonth] || []
    const eventForDate = events.find((event) => event.locdate === formattedString)

    if (eventForDate) {
      return (
        <div className='icon-container'>
          <StarIconCal className='star-icon-cal' />
        </div>
      )
    }
    return null
  }

  useEffect(() => {
    const currentDate = new Date();
    handleMonthChange({ activeStartDate: currentDate });
  }, []);

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        locale='ko'
        formatDay={(_, date) => date.toLocaleString('en', { day: 'numeric' })}
        calendarType='gregory'
        navigationLabel={({ date, locale }) =>
          `${date.getFullYear()}년 ${date.toLocaleString(locale, { month: 'long' })}`
        }
        tileClassName={tileClassName}
        tileContent={tileContent}
        minDetail='month'
        onClickDay={handleClick}
        onActiveStartDateChange={handleMonthChange}
      />
      {monthlyTip && (
        <div className="w-full h-full min-h-[calc(100vh-590px)] bg-bg-800 flex flex-col justify-center items-center py-4 px-6 gap-4 rounded-t-2xl">
          <div className='flex flex-col items-center gap-2 px-4'>
            <span className='font-medium text-md font-paperlogy'>{monthlyTip.locdate.slice(4, 6)}월의 천문 정보</span>
            <p className='font-normal text-sm text-text-secondary'>{monthlyTip.astroEvent}</p>
          </div>
          <AstroEventDetail day={formattedDate} event={selectedEvent} isDateSelected={isDateSelected} />
        </div>
      )}
    </div>
  )
}

export default AstroCalendar
