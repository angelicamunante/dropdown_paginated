/* eslint-disable react/jsx-no-undef */
import useState from "react";

const DisplayData = () => {
  const [selectedItem, setSelectedItem] = useState();

  const [openModal, setModalOpen] = useState(false);

  const data = inputs;

  const handleSelect = (selectedItem) => {
      setSelectedItem();
      setModalOpen(true);
  };
  const handleOnCloseModal = () => {
      setModalOpen(false);
      setSelectedItem(undefined);
  };

  return (
      <>
          <div className="Data">
              <ul>
                  {data.purpose?.map((item, index) =>
                      index === 0 ? (
                          <li key={index} onClick={() => handleSelect(item)}>
                              {item?.value}
                          </li>
                      ) : (
                          <li key={index}>{item?.value}</li>
                      )
                  )}
              </ul>
          </div>
          {/* modal component */}
          <Modal isOpen={openModal} onClose={handleOnCloseModal}>
              <div>{selectedItem?.value}</div>
          </Modal>
      </>
  );
};
export default DisplayData;

export const inputs = {
  purpose: [
      {
          locale: 'EN',
          code: 'CRP',
          value: 'Credit Card Payment',
      },
      {
          locale: 'EN',
          code: 'SRP',
          value: 'Educational Support',
      },
      {
          locale: 'EN',
          code: 'KRP',
          value: 'Family Support (Workers uninons)',
      },
      {
          locale: 'EN',
          code: 'YRP',
          value: 'Credit Card Payment,Family Support (Workers uninons)',
      },
      {
          locale: 'EN',
          code: 'CRP',
          value: 'Family Support (Workers uninons),Credit Card Payment',
      },
      {
          locale: 'EN',
          code: 'CRP',
          value: 'Credit Card Payment1234567890asdfghjkl',
      },
      {
          locale: 'EN',
          code: 'CRP',
          value: 'Family Support (Workers uninons)1234567890sdfghjkl',
      },
      {
          locale: 'EN',
          code: 'CRP',
          value: 'Educational Supportertyh456789sdfg',
      },
  ],
};