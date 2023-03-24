import type { FC } from 'react';

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
        return (        
        <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow={100}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>);
}
export default loading;