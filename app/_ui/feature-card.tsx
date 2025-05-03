import Image from "next/image"

type FeatureCardProps = {
  imageContainerColor: string
  imgSrc: string
  title: string
  titleTextColor: string
  description: string
}

export default function FeatureCard({ imageContainerColor, imgSrc, title, titleTextColor, description }: FeatureCardProps) {
  return (
    <div data-testid="feature-container" className="flex flex-col items-center p-6 border border-[#C4C6D0] rounded-xl text-center" >
      <div data-testid="feature-icon-container" className={`flex items-center justify-center h-12 w-12 ${imageContainerColor} rounded-full`}>
        <Image data-testid="feature-icon" src={imgSrc} alt="" className="h-6 w-auto" />
      </div>
      <p className={`text-xl font-semibold mt-6 mb-4 ${titleTextColor}`}>{title}</p>
      <p>{description}</p>
    </div>
  )
}