/*
  MIT License

  Copyright (c) 2024 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/

import React from 'react'

const UserDetail = ({ user, logout }) => {
    return (
        <div
            style={{
                border: '1px solid',
                position: 'absolute',
                top: '5rem',
                right: '7%',
                padding: '10px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                rowGap: '6px',
                background: '#578ef3',
                borderRadius: '8px',
                zIndex: 1000,
            }}
        >
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
            <button
                style={{
                    padding: '10px',
                    border: '1px solid #ff0000',
                    borderRadius: '10px',
                    color: '#ff0000',
                    backgroundColor: 'white',
                }}
                onClick={() =>
                    logout({
                        logoutParams: {
                            returnTo: window.location.origin,
                        },
                    })
                }
            >
                Log Out
            </button>
        </div>
    )
}

export default UserDetail
