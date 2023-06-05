 export default function Table1(){
  const a = ['suryaraj','jowsva','sathish','setnhi','hari','ragul'];
  const b = [{
    name:'surya',
    age:26,
    email:'surya123@gmail.com',
    phone:9876543210,
    city:'erode',
    state:'tn',
    nationality:'india'
  },{
    name:'joswa',
    age:22,
    email:'joswa148@gmail.com',
    phone:9095469617,
    city:'erode',
    state:'tn',
    nationality:'india'
  },{
    name:'senthil',
    age:25,
    email:'senthi123@gmail.com',
    phone:934567890,
    city:'erode',
    state:'tn',
    nationality:'india'
  },{
    name:'sathish',
    age:26,
    email:'sathish123@gmail.com',
    phone:9098765443,
    city:'erode',
    state:'tn',
    nationality:'india'
  },{
    name:'rahul',
    age:21,
    email:'rahul1234@gmail.com',
    phone:967876543,
    city:'erode',
    state:'tn',
    nationality:'india'
  },{
    name:'stalin',
    age:21,
    email:'stalin123@gmail.com',
    phone:90987654567,
    city:'erode',
    state:'tn',
    nationality:'india'
  },]
  return(
    <div>
      <table className="table">
          <thead className="bg-info ms-3">
            <tr className="bg-dark">
              <th >name</th>
              <th>age</th>
              <th>email</th>
              <th>phone</th>
              <th>city</th>
              <th>state</th>
             
            </tr>
          </thead>
        
      {b.map((r)=>(
        
         <tr className="bg-warning " >
            <td>{r.name}</td>
            <td>{r.age}</td>
            <td>{r.email}</td>
            <td>{r.phone}</td>
            <td>{r.state}</td>
            <td>{r.nationality}</td>


         </tr>
      ))}
      </table>
    </div>
  )
 }