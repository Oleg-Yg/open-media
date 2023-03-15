const tabsButton = document.querySelectorAll(".technical-requirements__tab")
const tabsItems = document.querySelectorAll(".technical-requirements__tables")

const onTabClick = (tab) => {
    tab.addEventListener("click", () => {
        let currentButton = tab
        let tabId = currentButton.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId)

        if (!currentButton.classList.contains("active")) {
            tabsButton.forEach((tab) => {
                tab.classList.remove("active")
            })
            tabsItems.forEach((item) => {
                item.classList.remove("active")
            })

            currentButton.classList.add("active")
            currentTab.classList.add("active")
        }
    })
}

tabsButton.forEach(onTabClick)