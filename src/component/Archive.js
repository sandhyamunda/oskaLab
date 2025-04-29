import { Link } from "react-router-dom";

function Archive(){
    return(
        <div className="archive-container">
            <div className="archive">
            <h1> Archive</h1>
            <p></p>
            <div style={{width:300, border:'1px solid',background:'#0274be',}}>
                <table>
                    <tbody>
                        <tr style={{color:'#ffffff',fontSize:16}}>
                            <th style={{textAlign:'center'}}>Volume 1</th>
                        </tr>
                        <tr>
                            <td><Link>Issue 1</Link></td>
                            <td><Link>Issue 2</Link></td>
                            <td><Link>Issue 3</Link></td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Volume 2</th>
                        </tr>
                        <tr>
                            <td><Link>Issue 1</Link></td>
                            <td><Link>Issue 2</Link></td>
                            <td><Link>Issue 3</Link></td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Volume 3</th>
                        </tr>
                        <tr>
                            <td><Link>Issue 1</Link></td>
                            <td><Link><strong>Issue 2</strong> </Link></td>
                            <td><Link>Issue 3</Link></td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Volume 4</th>
                        </tr>
                        <tr>
                            <td><Link>Issue 1</Link></td>
                            <td><Link>Issue 2</Link></td>
                            <td><Link>Issue 3</Link></td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            
        </div>
    )
}
export default Archive;