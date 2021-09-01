import style from "./at.module.scss"
import Link from "next/link"
import { ViewIcon } from "@icons/ViewIcon"
import { fiDown } from "@icons/Interface"

const space = " "

export const Button = ({ variant = "", text }) => (
   <button className={style.btn + space + (variant === "primary" ? style.btn_primary : style.btn_info)}>{text}</button>
)

export const Title = ({ className = "", title }) => <h2 className={style.title}>{title}</h2>

export const PrincipalTitle = ({ title }) => <h1 className={style["principal_t"]}>{title}</h1>

export const NextLink = ({ className = "", path, text, variant, icon, $click, css }) => {
   if (variant == "dropdown") {
      return (
         <li role='button' className={"navigation-item " + css} onClick={$click}>
            <div className='dropdown-button off-nav-section md-cross-center'>
               <ViewIcon width='18' height='18' icon={icon} className='a-ml-1' />
               <span>{text}</span>
               <ViewIcon className='dropdown-icon to-right' height='1rem' width='1rem' icon={fiDown} />
            </div>
         </li>
      )
   } else if (variant == "list") {
      return (
         <li className={css}>
            <Link href={path}>
               <a>{text}</a>
            </Link>
         </li>
      )
   } else {
      return <Link href={path}>{text}</Link>
   }
}

export const MenuBurger = ({ active, ...rest }) => {
   return (
      <button className={`burg ${active && "is-active"}`} {...rest}>
         <span className='burg__dot'></span>
         <span className='burg__dot'></span>
         <span className='burg__dot'></span>
         <span className='burg__dot'></span>
         <span className='burg__dot'></span>
         <span className='burg__dot'></span>
      </button>
   )
}

export const SeemlyLogotype = ({ variant, ...rest }) => (
   <Link href='/'>
      <a className={(variant === "bigger" && style.typeContainer) || ""} {...rest}>
         <svg
            width={variant === "bigger" ? 50 : 32}
            height={variant === "bigger" ? 50 : 32}
            fill='none'
            viewBox='0 0 32 32'
         >
            <path
               fill='#E89C25'
               d='M16 0C7.163 0 0 7.164 0 16s7.163 16 16 16c4.515 0 11-3 11.5-5.5 0-1-5.01-5.365-5.5-10.5 0-8.836 2.837-16-6-16zm0 22a6 6 0 110-12 6 6 0 010 12z'
            />
            <path
               fill='#7A482E'
               d='M27.5 15c.08-.646 4-3 4-3s-.108-.933-1.161-3.067C27.728 3.646 22.296 0 16 0 7.163 0 0 7.164 0 16c0 .328.03.65.049.974a13.928 13.928 0 002.002-.204c4.498-.834 4.932-2.133 8.455-3.18A6.003 6.003 0 0116 10a6 6 0 016 6l-.007.136c2.765 1.603 4.548-1.159 5.507-1.136z'
            />
            <path
               fill='#946C57'
               d='M15.5 3.415c6.639 0 12.054 4.68 12.46 10.585.017-.236.04-.47.04-.708C28 7.055 22.404 2 15.5 2S3 7.055 3 13.292c0 .238.023.472.04.707C3.445 8.094 8.86 3.415 15.5 3.415z'
            />
            <path
               fill='#BB7E1F'
               d='M23 15a6 6 0 00-6-6c-1.911 0-3.61.896-4.71 2.29A5.97 5.97 0 0116 10a6 6 0 016 6c0 1.402 0 0 .5.5 0-.5.5.412.5-1.5zm-6 16C8.163 31 1 23.836 1 15c0-4.164 1.604-7.943 4.21-10.79C2.016 7.135 0 11.326 0 16c0 8.836 7.163 16 16 16 4.673 0 8.074-1.306 11-4.5-2.847 2.606-5.836 3.5-10 3.5z'
            />
            <path
               fill='#623A25'
               d='M21.993 16.136c.242.141.517.267.805.386A5.97 5.97 0 0023 15a6 6 0 00-6-6c-1.911 0-3.61.896-4.71 2.29l.135-.089c.173-.13.353-.249.539-.359l.258-.146c.191-.101.389-.188.591-.267l.283-.11c.213-.072.434-.125.657-.173l.273-.062c.318-.053.642-.084.974-.084a6 6 0 016 6l-.007.136z'
            />
            <path
               fill='#BB7E1F'
               d='M22.038 16.636c.16.174.315.358.45.564l-.003.2C23.5 21.5 25.5 23.5 27 25.5l.5.5v.5c-.616 2.039-1.653.847-2 .5-1.145-1.005-3.252-5.509-3.576-8.139-.132-.797-.118-1.545.114-2.225z'
            />
            <path
               fill='#623A25'
               d='M1.123 16.898A16.076 16.076 0 011 15c0-4.164 1.604-7.943 4.21-10.79-.398.364-.777.749-1.137 1.15l-.007.008c-.35.392-.68.803-.991 1.229l-.04.053c-.293.405-.565.825-.821 1.256l-.078.13a15.68 15.68 0 00-.645 1.25l-.108.224c-.178.398-.332.808-.477 1.222l-.119.324c-.127.39-.229.791-.327 1.194l-.105.41c-.085.4-.144.811-.198 1.221l-.065.43C.032 14.865 0 15.429 0 16c0 .328.03.65.049.974.35-.013.714-.038 1.074-.076z'
            />
         </svg>
         {variant === "bigger" && <span className={style.typeName}>Code Seemly</span>}
      </a>
   </Link>
)
