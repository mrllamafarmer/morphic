import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'What is the weather forecast for Thatcham today and tomorrow?',
    message: 'What is the weather forecast for Thatcham today and tomorrow?'
  },
  {
    heading: 'What has happened in the world of ultrarunning in the last seven days?',
    message: 'What has happened in the world of ultrarunning in the last seven days?'
  },
  {
    heading: 'Summarise the news about Mainz FC over the past seven days?',
    message: 'Summarise the news about Mainz FC over the past seven days?'
  },
  {
    heading: 'Summarise the news about Gillingham FC over the past seven days?',
    message: 'Summarise the news about Gillingham FC over the past seven days?'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
