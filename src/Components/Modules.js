import React, { useState, useEffect } from "react";
import TableBanner from "./TableElements/TableBanner";
import InteractiveGrammarElements from "./TableElements/InteractiveGrammarElements";
import AdditionalResources from "./TableElements/AdditionalResources";
import { Sentence } from "../Assets/Data/Sentence";
import { POSNouns } from "../Assets/Data/POSNouns";
import { POSVerbs } from "../Assets/Data/POSVerbs";
import { Complements } from "../Assets/Data/Complements";
import { Phrase } from "../Assets/Data/Phrase";
import { Clause } from "../Assets/Data/Clause";
import { SentenceStructure } from "../Assets/Data/SentenceStructure";
import { Agreement } from "../Assets/Data/Agreement";
import { UsingVerbs } from "../Assets/Data/UsingVerbs";
import { UsingPronouns } from "../Assets/Data/UsingPronouns";
import { UsingModifiers } from "../Assets/Data/UsingModifiers";
import { Glossary } from "../Assets/Data/Glossary";
import { Capitals } from "../Assets/Data/Capitals";
import { Punctuation } from "../Assets/Data/Punctuation";
import { PunctuationII } from "../Assets/Data/PunctuationII";
import { Spelling } from "../Assets/Data/Spelling";
import "../Styles/Table.css";

const SentenceModule = () => {
  const [sentenceData, setSentenceData] = useState([]);
  const [nounsData, setNounsData] = useState([]);
  const [verbsData, setVerbsData] = useState([]);
  const [complementsData, setComplementsData] = useState([]);
  const [phraseData, setPhraseData] = useState([]);
  const [clauseData, setClauseData] = useState([]);
  const [sentenceStructureData, setSentenceStructureData] = useState([]);
  const [agreementData, setAgreementData] = useState([]);
  const [usingVerbsData, setUsingVerbsData] = useState([]);
  const [usingPronounsData, setUsingPronounsData] = useState([]);
  const [usingModifiersData, setUsingModifiersData] = useState([]);
  const [glossaryData, setGlossaryData] = useState([]);
  const [capitalsData, setCapitalsData] = useState([]);
  const [punctuationData, setPunctuationData] = useState([]);
  const [punctuationIIData, setPunctuationIIData] = useState([]);
  const [spellingData, setSpellingData] = useState([]);

  useEffect(() => {
    setSentenceData(Sentence);
    setNounsData(POSNouns);
    setVerbsData(POSVerbs);
    setComplementsData(Complements);
    setPhraseData(Phrase);
    setClauseData(Clause);
    setSentenceStructureData(SentenceStructure);
    setAgreementData(Agreement);
    setUsingVerbsData(UsingVerbs);
    setUsingPronounsData(UsingPronouns);
    setUsingModifiersData(UsingModifiers);
    setGlossaryData(Glossary);
    setCapitalsData(Capitals);
    setPunctuationData(Punctuation);
    setPunctuationIIData(PunctuationII);
    setSpellingData(Spelling);
  }, []);

  return (
    <div className="whole-table">
      <table className="table-container">
        <TableBanner data={sentenceData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            className="interactive"
            data={sentenceData}
          />
          <AdditionalResources className="additional" data={sentenceData} />
        </section>
      </table>
      <table className="table-container">
        <TableBanner data={nounsData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={nounsData}
            className="interactive"
          />
          <AdditionalResources className="additional" data={nounsData} />
        </section>
      </table>
      <table className="table-container">
        <TableBanner data={verbsData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={verbsData}
            className="interactive"
          />
          <AdditionalResources className="additional" data={verbsData} />
        </section>
      </table>
      <table className="table-container">
        <TableBanner data={complementsData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={complementsData}
            className="interactive"
          />
          <AdditionalResources className="additional" data={complementsData} />
        </section>
      </table>
      <table className="table-container">
        <TableBanner data={phraseData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={phraseData}
            className="interactive"
          />
          <AdditionalResources className="additional" data={phraseData} />
        </section>
      </table>
      <table className="table-container">
        <TableBanner data={clauseData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={clauseData}
            className="interactive"
          />
          <AdditionalResources className="additional" data={clauseData} />
        </section>
      </table>
      <table className="table-container">
        <TableBanner data={sentenceStructureData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={sentenceStructureData}
            className="interactive"
          />
          <AdditionalResources
            className="additional"
            data={sentenceStructureData}
          />
        </section>
      </table>
      <table className="table-container">
        <TableBanner data={agreementData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={agreementData}
            className="interactive"
          />
          <AdditionalResources className="additional" data={agreementData} />
        </section>
      </table>
      <table className="table-container">
        <TableBanner data={usingVerbsData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={usingVerbsData}
            className="interactive"
          />
          <AdditionalResources className="additional" data={usingVerbsData} />
        </section>
      </table>
      <table className="table-container">
        <TableBanner data={usingPronounsData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={usingPronounsData}
            className="interactive"
          />
          <AdditionalResources
            className="additional"
            data={usingPronounsData}
          />
        </section>
      </table>
      <table className="table-container">
        <TableBanner data={usingModifiersData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={usingModifiersData}
            className="interactive"
          />
          <AdditionalResources
            className="additional"
            data={usingModifiersData}
          />
        </section>
      </table>
      <table className="table-container">
        <TableBanner data={glossaryData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={glossaryData}
            className="interactive"
          />
          <AdditionalResources className="additional" data={glossaryData} />
        </section>
      </table>
      <table className="table-container">
        <TableBanner data={capitalsData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={capitalsData}
            className="interactive"
          />
          <AdditionalResources className="additional" data={capitalsData} />
        </section>
      </table>
      <table className="table-container">
        <TableBanner data={punctuationData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={punctuationData}
            className="interactive"
          />
          <AdditionalResources className="additional" data={punctuationData} />
        </section>
      </table>
      <table className="table-container">
        <TableBanner data={punctuationIIData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={punctuationIIData}
            className="interactive"
          />
          <AdditionalResources
            className="additional"
            data={punctuationIIData}
          />
        </section>
      </table>
      <table className="table-container">
        <TableBanner data={spellingData} />
        <section className="two-columns">
          <InteractiveGrammarElements
            data={spellingData}
            className="interactive"
          />
          <AdditionalResources className="additional" data={spellingData} />
        </section>
      </table>
    </div>
  );
};

export default SentenceModule;
