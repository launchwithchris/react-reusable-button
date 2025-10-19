export default function Button({children, Icon, mode = 'filled', ...props}) {
    
 let classes = 'button ';
 
 classes = mode.length > 0 ? mode + '-button' : classes;
 
 classes = Icon ? classes + ' ' + 'icon-button' : classes;
 
 return <button className={classes} {...props}>{Icon && (<span className="button-icon"><Icon /></span>)}<span>{children}</span></button>;
}
