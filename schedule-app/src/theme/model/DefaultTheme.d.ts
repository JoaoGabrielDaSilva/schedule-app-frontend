type Background = 'primary'

type Color = 'primary' | 'heading' | 'text'

type Radii = 'default'

type FontSize = 'sm' | 'md' | 'lg'


export interface DefaultTheme  {
  background: Background,
  color: Color,
  raddi: Radii,
  fontSize: FontSize
}