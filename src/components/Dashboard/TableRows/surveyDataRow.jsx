

const SurveyDataRow = ({ survey }) => {
  return (
    <tr>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="relative block">
              <img
                alt="profile"
                src={survey?.image}
                className="object-cover h-10 mx-auto rounded w-15 "
              />
            </div>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">{survey?.category}</p>
      </td>

      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">{survey?.title}</p>
      </td>

      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">
          {survey?.surveyStatus}
        </p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">
          Update Status in publish or unpublish from pending and if you select unpublish send a feedback
        </p>
      </td>
    </tr>
  );
}

export default SurveyDataRow