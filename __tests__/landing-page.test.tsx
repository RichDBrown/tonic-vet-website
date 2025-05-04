import LandingPage from '@/app/page'
import { render, screen } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'

describe('Landing section of landing page', () => {
  beforeEach(() => {
    render(<LandingPage />)
  })

  test('renders company title correctly', () => {
    const title = screen.getByRole('heading', { level: 1, name: 'Tonic Vet' })
    expect(title).toBeInTheDocument()
    expect(title).toHaveClass('text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent')
  })

  test('renders healine correctly', () => {
    const headline = screen.getByText('Never Take SOAP Notes Again — Let Tonic Vet Handle It')
    expect(headline).toBeInTheDocument()
    expect(headline).toHaveClass('text-4xl font-bold text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6')
  })

  test('renders subheadline correctly', () => {
    const subheadline = screen.getByText('Tonic Vet is a fast, affordable AI scribe that listens to your exam and creates your SOAP notes — so you can focus on what matters most.')
    expect(subheadline).toBeInTheDocument()
    expect(subheadline).toHaveClass('text-xl text-center mb-4')
  })

  test('renders subtitle correctly', () => {
    const subtitle = screen.getByText("Built for busy vets who'd rather focus on patients, not paperwork.")
    expect(subtitle).toBeInTheDocument()
    expect(subtitle).toHaveClass('text-lg text-center mb-8')
  })

  test('renders join the waitlist link correctly', () => {
    const links = screen.getAllByRole('link', { name: 'Join the waitlist' })
    expect(links[0]).toBeInTheDocument()
    expect(links[0]).toHaveAttribute('href', '/waitlist')
    expect(links[0]).toHaveClass('flex items-center justify-center bg-primary hover:bg-[#5995F8] active:bg-[#5995F8] hover:shadow-button active:shadow-button rounded-full w-full py-3 transition-all')
  })

  test('renders join the waitlist label correctly', () => {
    const labels = screen.getAllByText('Join the waitlist')
    expect(labels[0]).toBeInTheDocument()
    expect(labels[0]).toHaveClass('text-lg font-bold text-white')
  })

  test('renders join the waitlist icon correctly', () => {
    const icons = screen.getAllByTestId('waitlist-icon-button')
    expect(icons[0]).toBeInTheDocument()
    expect(icons[0]).toHaveClass('ml-2 w-5 h-auto')
  })

  test('renders menu button correctly', () => {
    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    expect(menuButton).toBeInTheDocument()
    expect(menuButton).toHaveClass('h-10 w-10 flex items-center justify-center rounded-full hover:bg-accent active:bg-accent')
  })
})

describe('Dialog of landing page', () => {
  let user: UserEvent

  beforeAll(() => {
    user = userEvent.setup()
  })
  beforeEach(() => {
    render(<LandingPage />)
  })

  test('renders pricing link correctly', () => {
    const link = screen.getByText('Pricing')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/pricing')
    expect(link).toHaveClass('pl-4 py-2 text-lg font-medium text-[#0F1729] hover:bg-accent hover:text-white active:bg-accent active:text-white rounded-full transition-all')
  })

  test('renders about us link correctly', () => {
    const link = screen.getByText('About us')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/about-us')
    expect(link).toHaveClass('pl-4 py-2 text-lg font-medium text-[#0F1729] hover:bg-accent hover:text-white active:bg-accent active:text-white rounded-full transition-all')
  })

  test('renders log in link correctly', () => {
    const link = screen.getByText('Log in')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/login')
    expect(link).toHaveClass('flex justify-center w-full py-3 mt-4 bg-primary rounded-full text-white text-sm font-medium hover:bg-[#5995F8] active:bg-[#5995F8] hover:shadow-button active:shadow-button transition-all')
  })

  test('opens dialog when menu button is pressed, and closes dialog when pressing outside of dialog', async () => {
    const dialog = screen.getByTestId('dialog')
    expect(dialog).toBeInTheDocument()
    expect(dialog).toHaveClass('flex h-full w-full fixed top-0 right-0 z-1 bg-black/80 transition-all duration-300 opacity-0 pointer-events-none')

    const menuButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuButton)
    expect(dialog).toHaveClass('flex h-full w-full fixed top-0 right-0 z-1 bg-black/80 transition-all duration-300 opacity-100 pointer-events-auto')

    const closeDialogArea = screen.getByTestId('close-dialog')
    await user.click(closeDialogArea)
    expect(dialog).toHaveClass('flex h-full w-full fixed top-0 right-0 z-1 bg-black/80 transition-all duration-300 opacity-0 pointer-events-none')
  })
})

describe('Why vets love it section of landing page', () => {
  beforeEach(() => {
    render(<LandingPage />)
  })

  test('renders headline of correctly', () => {
    const headline = screen.getByText('Why Vets Love Tonic Vet')
    expect(headline).toBeInTheDocument()
    expect(headline).toHaveClass('text-3xl text-center font-bold mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent')
  })

  test('renders feature containers correctly', () => {
    const containers = screen.getAllByTestId('feature-container')
    expect(containers).toHaveLength(3)
    containers.forEach((container) => {
      expect(container).toBeInTheDocument()
      expect(container).toHaveClass('flex flex-col items-center p-6 border border-[#C4C6D0] rounded-xl text-center')
    })
  })

  test('renders feature icon containers correctly', () => {
    const containers = screen.getAllByTestId('feature-icon-container')
    expect(containers).toHaveLength(3)

    expect(containers[0]).toBeInTheDocument()
    expect(containers[0]).toHaveClass('flex items-center justify-center h-12 w-12 bg-[#2463EB]/20 rounded-full')

    expect(containers[1]).toBeInTheDocument()
    expect(containers[1]).toHaveClass('flex items-center justify-center h-12 w-12 bg-[#7C3BED]/20 rounded-full')

    expect(containers[2]).toBeInTheDocument()
    expect(containers[2]).toHaveClass('flex items-center justify-center h-12 w-12 bg-[#0DA2E7]/20 rounded-full')
  })

  test('renders feature icons correctly', () => {
    const icons = screen.getAllByTestId('feature-icon')
    expect(icons).toHaveLength(3)

    icons.forEach((icon) => {
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveClass('h-6 w-auto')
    })
  })

  test('renders feature titles correctly', () => {
    const firstFeatureTitle = screen.getByText('Smarter Notes Less Effort')
    expect(firstFeatureTitle).toBeInTheDocument()
    expect(firstFeatureTitle).toHaveClass('text-xl font-semibold mt-6 mb-4 text-primary')

    const secondFeatureTitle = screen.getByText('Fast & Lightweight')
    expect(secondFeatureTitle).toBeInTheDocument()
    expect(secondFeatureTitle).toHaveClass('text-xl font-semibold mt-6 mb-4 text-accent')

    const thirdFeatureTitle = screen.getByText('Built to Be Affordable')
    expect(thirdFeatureTitle).toBeInTheDocument()
    expect(thirdFeatureTitle).toHaveClass('text-xl font-semibold mt-6 mb-4 text-secondary')
  })

  test('renders feature descriptions correctly', () => {
    const firstFeatureDescription = screen.getByText('Captures the key points from appointments — no fluff, no filler.')
    expect(firstFeatureDescription).toBeInTheDocument()

    const secondFeatureDescription = screen.getByText('No bloated features. Just upload, wait a few seconds, and get your notes.')
    expect(secondFeatureDescription).toBeInTheDocument()

    const thirdFeatureDescription = screen.getByText('We keep it simple so we can keep it affordable. No hidden fees. No nonsense.')
    expect(thirdFeatureDescription).toBeInTheDocument()
  })
})

describe('How tonic vet works section of landing page', () => {
  beforeEach(() => {
    render(<LandingPage />)
  })

  test('renders headline correctly', () => {
    const headline = screen.getByText('How Tonic Vet Works')
    expect(headline).toBeInTheDocument()
    expect(headline).toHaveClass('text-3xl text-center font-bold mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent')
  })

  test('renders step containers correctly', () => {
    const step1 = screen.getByText('1')
    expect(step1).toBeInTheDocument()
    expect(step1).toHaveClass('w-16 h-16 flex items-center justify-center rounded-full text-2xl font-semibold text-primary bg-[#2463EB]/20')

    const step2 = screen.getByText('2')
    expect(step2).toBeInTheDocument()
    expect(step2).toHaveClass('w-16 h-16 flex items-center justify-center rounded-full text-2xl font-semibold text-accent bg-[#7C3BED]/20')

    const step3 = screen.getByText('3')
    expect(step3).toBeInTheDocument()
    expect(step3).toHaveClass('w-16 h-16 flex items-center justify-center rounded-full text-2xl font-semibold text-secondary bg-[#0DA2E7]/20')
  })

  test('renders step titles correctly', () => {
    const step1Title = screen.getByText('Record your appointment')
    expect(step1Title).toBeInTheDocument()
    expect(step1Title).toHaveClass('text-xl font-semibold text-[#0F1729] mt-6 mb-2')

    const step2Title = screen.getByText('We handle the rest')
    expect(step2Title).toBeInTheDocument()
    expect(step2Title).toHaveClass('text-xl font-semibold text-[#0F1729] mt-6 mb-2')

    const step3Title = screen.getByText('Paste it into your PMS')
    expect(step3Title).toBeInTheDocument()
    expect(step3Title).toHaveClass('text-xl font-semibold text-[#0F1729] mt-6 mb-2')
  })

  test('renders step descriptions correctly', () => {
    const step1Desc = screen.getByText('Use Tonic Vet to capture the appointment — right from your phone, tablet, or computer.')
    expect(step1Desc).toBeInTheDocument()

    const step2Desc = screen.getByText('Your recording is automatically turned into a clear, structured SOAP note in seconds.')
    expect(step2Desc).toBeInTheDocument()

    const step3Desc = screen.getByText('Review and tweak if needed, then copy and paste your finished notes directly into your practice management system.')
    expect(step3Desc).toBeInTheDocument()
  })
})

describe('Interested section of landing page', () => {
  beforeEach(() => {
    render(<LandingPage />)
  })

  test('renders headline correcly', () => {
    const headline = screen.getByText('Interested in Tonic Vet?')
    expect(headline).toBeInTheDocument()
    expect(headline).toHaveClass('text-3xl text-center font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent')
  })

  test('renders description correctly', () => {
    const desc = screen.getByText('Get early access (and the demo before anyone else)')
    expect(desc).toBeInTheDocument()
    expect(desc).toHaveClass('text-xl text-center mb-8')
  })

  test('renders join the waitlist link correctly', () => {
    const links = screen.getAllByRole('link', { name: 'Join the waitlist' })
    expect(links[1]).toBeInTheDocument()
    expect(links[1]).toHaveAttribute('href', '/waitlist')
    expect(links[1]).toHaveClass('flex items-center justify-center bg-primary hover:bg-[#5995F8] active:bg-[#5995F8] hover:shadow-button active:shadow-button rounded-full w-full py-3 transition-all')
  })

  test('renders join the waitlist label correctly', () => {
    const labels = screen.getAllByText('Join the waitlist')
    expect(labels[1]).toBeInTheDocument()
    expect(labels[1]).toHaveClass('text-lg font-bold text-white')
  })

  test('renders join the waitlist icon correctly', () => {
    const icons = screen.getAllByTestId('waitlist-icon-button')
    expect(icons[1]).toBeInTheDocument()
    expect(icons[1]).toHaveClass('ml-2 w-5 h-auto')
  })
})