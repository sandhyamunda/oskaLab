const FooterTheme = (theme) =>({
container:{backgroundColor: '#f5f5f5',
    px: 32,
    py: 3,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #ddd',} ,

    location:{ mr: 1,border:2, color: 'primary.main',
        padding:1
    },
    phoneicon:{mr: 1,border:2,
        color: 'primary.main',
        padding:1,
        fontSize:"small"
    },
    phonenumber:{color: 'primary.main',
    },
    getcontainer:{border:2,
        color: 'primary.main',
        padding:1

    }

})

export default FooterTheme;