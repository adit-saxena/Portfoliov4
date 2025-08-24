import stylesw from './watchlist.module.css';

export default function Workrow({ serial, heading, description }) {
    return (
        <div className={stylesw.workrow}>
          <div className={stylesw.serial}>
            <h3>{serial}</h3>
          </div>
          <div className={stylesw.heading}>
            <h3>{heading}</h3>
          </div>
          {/* Change <p> to <div> here */}
          <div className={stylesw.description}>
            {description}
          </div>
        </div>
    );
}