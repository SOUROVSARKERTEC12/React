import React, { useEffect, useRef } from 'react';

export default function From() {
    const inputRef = useRef(null);

    useEffect(() => {
        //component did load
        inputRef.current.focus();
    }, []);
    return (
        <div>
            <p>
                <input ref={inputRef} type='text' placeholder='enter something...' />
            </p>
        </div>
    );
}