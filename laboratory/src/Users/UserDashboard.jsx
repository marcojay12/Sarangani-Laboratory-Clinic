import PageComponent from "../components/PageComponent";

export default function UserDashboard() {
    return (
<PageComponent title='User Dashboard'>

<div className="border-b border-gray-900/10 pb-12">
        <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-1">
       <table className="border-collapse border border-slate-400 ...">
  <thead>
    <tr>
      <th className="border border-slate-300 ...">Firstname</th>
      <th className="border border-slate-300 ...">Middlename</th>
      <th className="border border-slate-300 ...">Lastname</th>
      <th className="border border-slate-300 ...">Age</th>
      <th className="border border-slate-300 ...">Gender</th>
      <th className="border border-slate-300 ...">Address</th>
      <th className="border border-slate-300 ...">Active</th>
    </tr>
  </thead>
  <tbody className="text-center">
    <tr>
      <td className="border border-slate-300 ...">sample</td>
      <td className="border border-slate-300 ...">sample</td>
      <td className="border border-slate-300 ...">sample</td>
      <td className="border border-slate-300 ...">sample</td>
      <td className="border border-slate-300 ..."></td>
      <td className="border border-slate-300 ...">sample</td>

    </tr>

  </tbody>
</table>
          </div>
        </div>

</PageComponent>
        )
}


