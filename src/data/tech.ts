import AngularIcon from '@icons/AngularIcon.svg'
import AstroIcon from '@icons/AstroIcon.svg'
import DockerIcon from '@icons/DockerIcon.svg'
import GitIcon from '@icons/GitIcon.svg'
import JavaIcon from '@icons/JavaIcon.svg'
import JavaScriptIcon from '@icons/JavaScriptIcon.svg'
import MySQLIcon from '@icons/MySQLIcon.svg'
import NativewindIcon from '@icons/NativewindIcon.svg'
import NetIcon from '@icons/NetIcon.svg'
import NodeIcon from '@icons/NodeIcon.svg'
import PostgreSQLIcon from '@icons/PostgreSQLIcon.svg'
import PreactIcon from '@icons/PreactIcon.svg'
import PrismaIcon from '@icons/PrismaIcon.svg'
import ReactIcon from '@icons/ReactIcon.svg'
import ShopifyIcon from '@icons/ShopifyIcon.svg'
import SpringBootIcon from '@icons/SpringBootIcon.svg'
import SqliteIcon from '@icons/SqliteIcon.svg'
import TailwindIcon from '@icons/TailwindIcon.svg'
import TanstackIcon from '@icons/TanstackIcon.svg'
import TypeScriptIcon from '@icons/TypeScriptIcon.svg'
import WordPressIcon from '@icons/WordPressIcon.svg'
import SqlServerIcon from '@icons/SqlServer.svg'
import ResendIcon from '@icons/ResendIcon.svg'
import ClerkIcon from '@icons/ClerkIcon.svg'



import type { SvgComponent } from 'astro/types'

export interface Tech {
  name:  string
  color: string
  href:  string
  Icon:  SvgComponent & ImageMetadata
}

export const TECH_KEYS = [
  'TypeScript', 'React', 'React Native', 'Preact', 'Angular', 'Astro', 'Tailwind CSS', 'Nativewind',
  'Node.js', 'Java', 'Spring Boot', 'PostgreSQL', 'MySQL',
  'Docker', 'Git', 'Shopify', 'WordPress','Sqlite', 'Prisma', '.Net','JavaScript', 'Tanstack', 'Sql Server','Css', 'Resend', 'Clerk',
] as const

export type TechKey = typeof TECH_KEYS[number]

export const techs: Record<TechKey, Tech> = {
  'TypeScript':   { name: 'TypeScript',   color: '#3178C6', href: 'https://www.typescriptlang.org/docs/',                        Icon: TypeScriptIcon  },
  'React':        { name: 'React',        color: '#61DAFB', href: 'https://react.dev',                                           Icon: ReactIcon       },
  'React Native': { name: 'React Native', color: '#61DAFB', href: 'https://reactnative.dev',                                    Icon: ReactIcon       },
  'Preact':       { name: 'Preact',       color:'#673AB8',  href:'https://preactjs.com',                                         Icon:PreactIcon       },
  'Angular':      { name: 'Angular',      color: '#DD0031', href: 'https://angular.dev/overview',                                Icon: AngularIcon     },
  'Astro':        { name: 'Astro',        color: '#FF5D01', href: 'https://docs.astro.build',                                    Icon: AstroIcon       },
  'Css':          { name: 'Css',          color: '#663399', href: 'https://developer.mozilla.org/es/docs/Web/CSS',              Icon: TailwindIcon    },
  'Tailwind CSS': { name: 'Tailwind CSS', color: '#06B6D4', href: 'https://tailwindcss.com/docs',                                Icon: TailwindIcon    },
  'Nativewind':   { name: 'Nativewind',   color: '#38BDF8', href: 'https://www.nativewind.dev',                                  Icon: NativewindIcon  },
  'Node.js':      { name: 'Node.js',      color: '#339933', href: 'https://nodejs.org/docs',                                     Icon: NodeIcon        },
  'Java':         { name: 'Java',         color: '#ED8B00', href: 'https://docs.oracle.com/en/java/',                            Icon: JavaIcon        },
  'Spring Boot':  { name: 'Spring Boot',  color: '#6DB33F', href: 'https://docs.spring.io/spring-boot/',                         Icon: SpringBootIcon  },
  'PostgreSQL':   { name: 'PostgreSQL',   color: '#4169E1', href: 'https://www.postgresql.org/docs/',                            Icon: PostgreSQLIcon  },
  'Sqlite':       { name:'Sqlite',        color:'#006ea1',  href: 'https://sqlite.org',                                          Icon: SqliteIcon      },
  'MySQL':        { name: 'MySQL',        color: '#4479A1', href: 'https://dev.mysql.com/doc/',                                  Icon: MySQLIcon       },
  'Docker':       { name: 'Docker',       color: '#2496ED', href: 'https://docs.docker.com',                                     Icon: DockerIcon      },
  'Git':          { name: 'Git',          color: '#F05032', href: 'https://git-scm.com/doc',                                     Icon: GitIcon         },
  'Shopify':      { name: 'Shopify',      color: '#7AB55C', href: 'https://shopify.dev/docs',                                    Icon: ShopifyIcon     },
  'WordPress':    { name: 'WordPress',    color: '#21759B', href: 'https://developer.wordpress.org',                             Icon: WordPressIcon   },
  'Prisma':       { name: 'Prisma',       color: '#077586', href: 'https://www.prisma.io',                                       Icon: PrismaIcon      },
  '.Net':         {name:  '.Net',         color: '#8e0ae6', href: 'https://dotnet.microsoft.com',                                Icon: NetIcon         },
  'JavaScript':   {name: 'JavaScript',    color: '#F7DF1E', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',     Icon: JavaScriptIcon  },
  'Tanstack':     {name: 'Tanstack',      color: '#7c7777', href: 'https://tanstack.com',                                        Icon: TanstackIcon    },
  'Resend':       {name: 'Resend',        color: '#000000', href: 'https://resend.com',                                          Icon: ResendIcon      },
  'Clerk':        {name: 'Clerk',         color: '#6C47FF',href: 'https://clerk.com',                                           Icon: ClerkIcon       },
  'Sql Server':   {name: 'Sql Server',    color: '#ff0000', href: 'https://learn.microsoft.com/es-es/sql/?view=sql-server-ver17&viewFallbackFrom=sql-server-ver1', Icon: SqlServerIcon }

}
