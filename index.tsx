    } catch(e) {
        updateStatus("Error drafting email", "error");
    } finally {
        draftEmailButton.disabled = false;
        draftEmailButton.innerHTML = '<i class="fas fa-pen-nib"></i> Draft Email';
    }
}

function handleCopyEmail() {
    if (!emailOutputText) return;
    const text = emailOutputText.innerText;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = copyEmailButton.innerHTML;
        copyEmailButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => copyEmailButton.innerHTML = '<i class="fas fa-copy"></i> Copy to Clipboard', 2000);
    });
}

// GPA & Exchange Placeholders
function setupGpaInputForm() {
    if(!gpaModuleInputContainer) return;
// ... existing code ...
function setupEventListeners() {
    generateButton.addEventListener('click', generateFlashcards);
    topicInput.addEventListener('input', () => {
        // Enable if text is present OR file is selected
        generateButton.disabled = topicInput.value.trim() === '' && !topicImageInput.files?.[0];
    });
    
    // Landing Page & Navigation Listeners (Restored)
    if(enterMainAppButton) enterMainAppButton.addEventListener('click', () => updateView('flashcards_input'));
    if(startSortingHatButton) startSortingHatButton.addEventListener('click', () => updateView('accom_matcher'));
    
    // Feature Navigation
    if(viewAccomMatcherButton) viewAccomMatcherButton.addEventListener('click', () => updateView('accom_matcher'));
    if(viewEmailDrafterButton) viewEmailDrafterButton.addEventListener('click', () => updateView('email_drafter'));

    // Sorting Hat & Email Drafter Actions
    if(sortMeButton) sortMeButton.addEventListener('click', handleAccomSort);
    if(draftEmailButton) draftEmailButton.addEventListener('click', handleDraftEmail);
    if(copyEmailButton) copyEmailButton.addEventListener('click', handleCopyEmail);

    // New listener for file input
    topicImageInput.addEventListener('change', () => {
        if (topicImageInput.files && topicImageInput.files[0]) {
             topicImageFileName.textContent = topicImageInput.files[0].name;
             generateButton.disabled = false;
        } else {
             topicImageFileName.textContent = '';
             generateButton.disabled = topicInput.value.trim() === '';
        }
    });

    refreshTopicIdeasButton.addEventListener('click', handleRefreshTopicIdeas);
// ... existing code ...