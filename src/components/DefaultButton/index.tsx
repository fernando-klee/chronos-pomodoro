import styles from './styles.module.css'

type DefaultButtonProps = {
  children: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>

export function DefaultButton({ children, color = 'green', ...props }: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {children}
      </button>
    </>
  )
}