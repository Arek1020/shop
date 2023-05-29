
const request = (path, opts, token) => {
    console.log('REQUEST: ', path)
    return new Promise(async (resolve, reject) => {
        opts = opts || {}
        // if (token && token != undefined && token != 'undefined') {
        //     token = token
        //     opts.sid = token.sid
        //     opts.key = token.key
        //     opts.secretkey = config.SECRETKEY
        //     opts.cid = currentCompany.ID
        // }

        fetch(`http://localhost:8000${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '/'
            },
            body: JSON.stringify(opts),
        })
            .then(async res => {
                res = await res.json()
                try {
                    if (res.err || res.error) {
                        return reject([res.msg || res.error, res]);
                    } else {
                        return resolve(res)
                    }
                } catch (err) {
                    console.log(err);
                    return reject(['Błąd danych']);
                };
            })
            .catch(err => {
                return reject(['Błąd połączenia z serwerem']);
            });
    });
}

export default request;