import { Link } from "react-router-dom"

export default function Tbutton({
    color = 'blue',
    to = '',
    circle = false,
    href = '',
    link = false,
    target = '_blank',
    onClick = () => {},
    children

}) {
    let classes = [
        'flex',
        'whitespace-nowrap',
        'text-sm',
        'border',
        'border-2',
        'border-transparent',
    ];
    if (link) {
        classes = [
            ...classes,
            'transition-colors',
        ];
        switch(color){
            case 'blue':
                classes = [
                    ...classes,
                    'text-blue-500',
                    'focus:border-blue-500'
                ];
                break;
                case 'red':
                    classes = [
                        ...classes,
                        'text-red-500',
                        'focus:boarder-red-500'
                    ];
        }
    } else {
        classes = [
            ...classes,
            'text-white',
            'focus:ring-2',
            'focus:ring-offset-2'
        ];


        switch(color){
            case 'blue':
                classes = [
                    ...classes,
                    'bg-blue-600',
                    'hover:bg-blue-700',
                    'focus:ring-indigo-500',
                ];
                break;
                case 'red':
                    classes = [
                        ...classes,
                        'text-red-500',
                        'focus:border-red-500'
                    ];
                    break;
                    case 'green':
                        classes = [
                            ...classes,
                            'bg-emerald-500',
                            'hover:bg-emerald-700',
                            'focus:ring-emerald-400'
                        ];
                        break;
        }
    }

    if (circle){
        classes = [
            ...classes,
            'h-8',
            'w-8',
            'items-center',
            'justify-center',
            'rounded-full',
            'text-sm'
        ];
    } else {
        classes = [
            ...classes,
            'p-0',
            'py-2',
            'px-4',
            'rounded-md'
        ];
    }
    return (
<>
        {href && (<a href={href} className={classes.join(' ')} target={target}>{children} </a>)}
        {to && (<Link to={to} className={classes.join(' ')}>{children}</Link>)}
        {!to && !href && (<button className={classes.join(' ')}>{children}</button>)}
</>
        )
}



