import React, { useState } from 'react';


const ProductDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card description-card">
      <h2 className='text-[#252B42] text-[24px]'>Description</h2>
      <p style={{color:'#475569'}} className={isExpanded ? '' : 'collapsed'}>
        Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays.
Advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything 
        {isExpanded && (
          <>
            <br />
            Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays.
Advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything 
          </>
        )}
      </p>
      <div className='flex items-center justify-center'>
        <button onClick={() => setIsExpanded(!isExpanded)} className="see-more-btn text-[#0F172A]">
        See More {isExpanded ? '▴' : '▾'}
      </button>
      </div>
    </div>
  );
};

const ProductSpecification = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card specification-card">
      <h2 className='text-[24px] font-[500]'>Specification</h2>
      <h3 className='text-[24px] font-[500]'>Sharp FP-J30E-B Air Purifier</h3>
      <ul>
        <li>GMP Cosmetic Good Manufacturing Practice</li>
        <li>Cruelty Free</li>
        <li>No Animal Testing</li>
        {isExpanded && <li>Zenpla Global Standard</li>}
      </ul>
    <div className='flex items-center justify-center'>
          <button onClick={() => setIsExpanded(!isExpanded)} className="see-more-btn">
        See More {isExpanded ? '▴' : '▾'}
      </button>
    </div>
    </div>
  );
};


const ProductInfo = () => {
  return (
    <div className="lg:px-[80px] px-[10px] pt-[15px] bg-[#F1F5F9]">
      <div className='lg:max-w-[955px]'>
        <ProductDescription />
        <ProductSpecification />
      </div>
    </div>
  );
};

export default ProductInfo;