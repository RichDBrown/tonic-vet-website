type StepProps = {
  num: string,
  numColor: string
  numContainerColor: string
  title: string
  desc: string
}

export default function Step({ num, numColor, numContainerColor, title, desc }: StepProps) {
  return (
    <div className="flex flex-col items-center flex-1">
      <div className={`w-16 h-16 flex items-center justify-center rounded-full text-2xl font-semibold ${numColor} ${numContainerColor}`}>
        {num}
      </div>
      <p className="text-xl font-semibold text-[#0F1729] mt-6 mb-2">{title}</p>
      <p>{desc}</p>
    </div>
  )
}