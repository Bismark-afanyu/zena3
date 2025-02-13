"use client";
import { useRouter } from 'next/navigation';

const ProviderProfile = ({ onBack }) => {
  const router = useRouter();
  const { id } = router.query; 

  // Dummy provider data
  const dummyProviders = [
    {
      id: '1',
      name: 'Dr. John Doe',
      specialty: 'Cardiologist',
      profilePicture: 'https://via.placeholder.com/150',
      workingDays: ['Monday', 'Wednesday', 'Friday'],
      timeSlots: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM']
    },
    {
      id: '2',
      name: 'Dr. Jane Smith',
      specialty: 'Dermatologist',
      profilePicture: 'https://via.placeholder.com/150',
      workingDays: ['Tuesday', 'Thursday'],
      timeSlots: ['10:00 AM - 1:00 PM', '3:00 PM - 6:00 PM']
    },
    {
      id: '3',
      name: 'Dr. Emily Johnson',
      specialty: 'Pediatrician',
      profilePicture: 'https://via.placeholder.com/150',
      workingDays: ['Monday', 'Tuesday', 'Thursday'],
      timeSlots: ['8:00 AM - 11:00 AM', '1:00 PM - 4:00 PM']
    }
  ];

  // Find the provider by ID
  const provider = dummyProviders.find((provider) => provider.id === id);
  console.log("&************************************************************************************************")
  console.log(provider)

  // Handle case where provider is not found
  if (!provider) {
    return <div>Provider not found</div>;
  }

  return (
    <div className="provider-profile p-4 bg-white min-h-screen">
      {/* Back Button */}
      <button
        onClick={onBack || (() => router.back())} // Use router.back() as fallback
        className="text-Teal_blue-50 font-bold underline mb-4"
      >
        Back
      </button>

      {/* Provider Card */}
      <div className="provider-card bg-white shadow-lg rounded-lg p-4 mb-6 flex">
        <img
          src={provider.profilePicture}
          alt={`${provider.name} profile`}
          className="w-24 h-24 rounded-lg mr-4"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold">{provider.name}</h2>
          <p className="text-gray-600">{provider.specialty}</p>
          <p className="text-sm text-Teal_blue-50 underline mt-2">View Bio</p>
        </div>
      </div>

      {/* Separator */}
      <hr className="my-4" />

      {/* Provider Details */}
      <div>
        <p>
          <strong>Provider ID:</strong> {provider.id}
        </p>
        <p>
          <strong>Location:</strong> Ikoyi, Victoria Island, Lekki Phase 1
        </p>
      </div>

      {/* Separator */}
      <hr className="my-4" />

      {/* Working Days and Time Slots */}
      <div>
        <h3 className="text-lg font-bold mb-2">Available Working Days</h3>
        <ul>
          {provider.workingDays.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ul>
        <h3 className="text-lg font-bold mb-2">Available Time Slots</h3>
        <ul>
          {provider.timeSlots.map((slot, index) => (
            <li key={index}>{slot}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProviderProfile;
