import React from 'react';

function ToastMessage({message}) {
  return (
    <div aria-live="polite" aria-atomic="true" style={{ position: 'relative', minHeight: '200px' }}>
      <div className="toast" style={{ position: 'absolute', top: 0, right: 0 }}>
        <div className="toast-header">
          <img src="placeholder.jpg" className="rounded mr-2" alt="Placeholder" />
          <strong className="mr-auto">Notification Title</strong>
          <small>11 mins ago</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">
          {message}
        </div>
      </div>
    </div>
  );
}

export default ToastMessage;
